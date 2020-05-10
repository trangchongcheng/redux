import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSanPham extends Component {

    renderSanPham = () => {
        return this.props.mangSanPham.map((sanPham, index) => {
            return <div className="col-3" key={index}>
                <SanPham sanPham={sanPham} />
            </div>
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
