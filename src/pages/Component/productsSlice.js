// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Async thunk to fetch products
// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await fetch('https://api.eduhawk.in/api/product');

//       if (!res.ok) {
//         throw new Error(`HTTP ${res.status} – ${res.statusText}`);
//       }

//       const json = await res.json();
//       console.log('Products raw response:', json);

//       // Handle different possible API shapes
//       const productArray = Array.isArray(json)
//         ? json
//         : Array.isArray(json?.data)
//         ? json.data
//         : json?.products ?? json?.results ?? [];

//       return productArray;
//     } catch (err) {
//       return rejectWithValue(err.message || 'Failed to load products');
//     }
//   }
// );

// const initialState = {
//   products: [],
//   categories: ['All'],
//   status: 'idle',     // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
//   activeCategory: 'All',
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     setActiveCategory: (state, action) => {
//       state.activeCategory = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.products = action.payload;

//         // Derive categories once products are loaded
//         const uniqueCategories = [
//           'All',
//           ...new Set(
//             action.payload
//               .map((p) => p?.category?.name ?? null)
//               .filter(Boolean)
//           ),
//         ];
//         state.categories = uniqueCategories;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// // Export actions
// export const { setActiveCategory } = productsSlice.actions;

// // Export selectors
// export const selectProducts = (state) => state.products.products;
// export const selectCategories = (state) => state.products.categories;
// export const selectActiveCategory = (state) => state.products.activeCategory;
// export const selectProductsStatus = (state) => state.products.status;
// export const selectProductsError = (state) => state.products.error;
// export const selectFilteredProducts = (state) => {
//   const { products, activeCategory } = state.products;
//   if (activeCategory === 'All') return products;
//   return products.filter((p) => p?.category?.name === activeCategory);
// };

// export default productsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://api.eduhawk.in/api/product",
      );

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} – ${res.statusText}`);
      }

      const json = await res.json();
      console.log("Products raw response:", json);

      // Handle different possible API shapes safely
      const productArray = Array.isArray(json)
        ? json
        : Array.isArray(json?.data)
          ? json.data
          : (json?.products ?? json?.results ?? []);

      return productArray;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to load products");
    }
  },
);

const initialState = {
  products: [], // all fetched products
  categories: ["All"], // derived from products
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  activeCategory: "All",
  searchQuery: "", // for searching by name/title
  currentPage: 1, // client-side pagination
  itemsPerPage: 9, // adjust as needed (6, 9, 12, 15, 20, etc.)
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
      state.currentPage = 1; // reset pagination when category changes
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload.trim();
      state.currentPage = 1; // reset pagination on new search
    },
    setCurrentPage: (state, action) => {
      state.currentPage = Number(action.payload);
    },
    resetFilters: (state) => {
      state.activeCategory = "All";
      state.searchQuery = "";
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;

        // Derive unique categories only once when products are loaded
        const uniqueCategories = [
          "All",
          ...new Set(
            action.payload
              .map((p) => p?.category?.name ?? null)
              .filter(Boolean),
          ),
        ];
        state.categories = uniqueCategories;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// ────────────────────────────────────────────────
// Exports
// ────────────────────────────────────────────────
export const {
  setActiveCategory,
  setSearchQuery,
  setCurrentPage,
  resetFilters,
} = productsSlice.actions;

// Selectors
export const selectProducts = (state) => state.products.products;
export const selectCategories = (state) => state.products.categories;
export const selectActiveCategory = (state) => state.products.activeCategory;
export const selectSearchQuery = (state) => state.products.searchQuery;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
export const selectCurrentPage = (state) => state.products.currentPage;
export const selectItemsPerPage = (state) => state.products.itemsPerPage;

// Combined selector: filtered + searched + paginated
export const selectVisibleProducts = (state) => {
  const { products, activeCategory, searchQuery, currentPage, itemsPerPage } =
    state.products;

  // 1. Category filter
  let result = products;
  if (activeCategory !== "All") {
    result = result.filter((p) => p?.category?.name === activeCategory);
  }

  // 2. Search filter (case-insensitive on name)
  if (searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();
    result = result.filter((p) =>
      (p?.name || "").toLowerCase().includes(lowerQuery),
    );
  }

  // 3. Pagination
  const totalItems = result.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const paginatedItems = result.slice(startIndex, startIndex + itemsPerPage);

  return {
    items: paginatedItems,
    totalItems,
    totalPages,
    currentPage: safeCurrentPage,
  };
};

// For backward compatibility with your previous code
export const selectFilteredProducts = selectVisibleProducts;

export default productsSlice.reducer;
