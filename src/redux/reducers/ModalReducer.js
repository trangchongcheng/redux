//Modal reducer là state cảu modal

const stateModal = {
    thongTinSanPham: {
        tenSP: 'Tên mặc định',
        hinhAnh: '',
        gia: 1000
    },
    //...
}
//Định nghĩa store cho stateModal
const stateModalReducer = (state=stateModal,action) => {

    //action: là dữ liệu được dispatch từ component
    switch(action.type){
        case 'XEM_CHI_TIET': {
            state.thongTinSanPham = action.sanPham;
            return {...state};
        }
    }
    return {...state}
}

export default stateModalReducer;