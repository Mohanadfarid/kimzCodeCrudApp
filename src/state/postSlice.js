const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    recordes:[],
    loading:false,
    error:null
}
const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:{}
})

export default  postSlice.reducer