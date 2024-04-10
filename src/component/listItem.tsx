'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getData } from '@/database/firebaseConfig';
import { useEffect, useState } from 'react';
import { Database } from 'firebase/database';
import  noImg from '../app/assets/noimg.jpg'
import path from 'path';
const Item=({item}:{item:any})=>{

    if(!item) return <>loading...</>
    return     <Card style={{ width: '18rem' }}>
    <Card.Img loading='lazy' variant="top" src={item.img||noImg.src} />

    <Card.Body>
      <Card.Title>{item.ten}</Card.Title>
      <Card.Text>
        Giá: {item.gia} VNĐ
      </Card.Text>
      <Card.Text>
        {item.mota}
      </Card.Text>
      <Button variant="primary">Thêm vào giỏ hàng</Button>
    </Card.Body>
  </Card>
}
 const ListItem=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        getData('loaisanpham',(e:any)=>{
            setData(e)
        })
    },[])
    if(data.length<=0)return <>Loading...</>
    return  <div className="list-container">
       {
        data.map((i:any)=>{
        
            return <div key={i.id} className='group-item'>
                 <div className='list-header'>
            <div>{i.tenloai}</div>
        </div>
           <div className='item-list'>
             {
                i.itemList.map((i:any,index:number)=>{
                    return <Item key={index} item={i}></Item>
                })
            }
           </div>
            </div>
        })
       }
    </div>
}
export {ListItem}