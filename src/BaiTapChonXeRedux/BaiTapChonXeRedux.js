import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham';
import Modal from './Modal';

export default class BaiTapChonXeRedux extends Component {
    mangSP = [
        { maSP: 1, tenSP: 'black car', hinhAnh: './img/CarBasic/products/black-car.jpg', gia: 1000 },
        { maSP: 2, tenSP: 'red car', hinhAnh: './img/CarBasic/products/red-car.jpg', gia: 2000 },
        { maSP: 3, tenSP: 'silver car', hinhAnh: './img/CarBasic/products/silver-car.jpg', gia: 3000 },
        { maSP: 3, tenSP: 'Steel car', hinhAnh: './img/CarBasic/products/steel-car.jpg', gia: 3000 }
      ];
    

    render() {
        return (
            <div>
                <DanhSachSanPham mangSanPham={this.mangSP} />
                <Modal />
            </div>
        )
    }
}
