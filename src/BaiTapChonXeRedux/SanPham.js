import React, { Component } from 'react'
import {connect} from 'react-redux'
class SanPham extends Component {
    render() {
        //Lấy giá trị từ props của component DanhSachSanPham truyền vào
        let {sanPham} = this.props
        return (
            <div className="card text-white bg-dark">
                <img style={{width:'100%'}} className="card-img-top" src={sanPham.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia}</p>
                    <button onClick={() =>{ this.props.xemChiTiet(sanPham)}} className="btn btn-success" data-toggle="modal" data-target="#modelId">Xem chi tiết</button>
                </div>
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xemChiTiet : (sanPham) => {
            let action = {
                type:'XEM_CHI_TIET', //Thuộc tính bắt buộc 
                sanPham:sanPham //Giá trị gửi lên store
            }
            //Dùng hàm dispatch đưa action lên store
            dispatch(action);
        }
    }
}
// const mapStateToProps = (state) => {
//     return {

//     }
// }
export default connect(mapDispatchToProps)(SanPham)
