import Modal from '../components/Modal'
import React, {useState } from 'react'
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {useGetData} from '../custom-hooks/FetchData'

const columns: GridColDef[]= [
    //{field:'id', headerName:'ID', width:90, hideable:true},
    {field: 'make', headerName: 'Make', flex:1},
    {field: 'model', headerName: 'Model', flex:1},
    {field: 'year', headerName: 'Year', flex: 1},
    {field: 'horse_power', headerName: 'Horse Power', flex: 1},
    {field: 'value', headerName: "Value", flex:1}
]

function DataTable () {
    const [open, setOpen] = useState(false);
    const {inventoryData, getData}= useGetData();
    const [selectionModel, setSelectionModel]=useState<string[]>([])



const handleOpen = ()=>{
    setOpen(true)
}

const handleClose = ()=> {
    setOpen(false)
}

const deleteData= ()=>{
    server_calls.delete(selectionModel[0])
    getData();
    console.log(`Selection Model: ${selectionModel}`)
    setTimeout( ()=>{window.location.reload()},500)

}

//const getData = async()=>{
   // const result = await server_calls.get();
// console.log(result)
//}

  return (
    <>
        <Modal
        id= {selectionModel}
        open= {open}
        onClose= {handleClose}
        />
     <div className=" flex flex-row">
        <div>
            <button
            onClick={()=>handleOpen()}
            className='p-3 m-4 bg-slate-300 rounded hover:bg-slate-800 text-white'>
                Add Inventory
            </button>
        </div>
            <button
            onClick= {handleOpen}
            className='p-3 m-4 bg-slate-300 rounded hover:bg-slate-800 text-white'>
                Update Inventory
            </button>
            <button
            onClick= {deleteData}
            className='p-3 m-4 bg-slate-300 rounded hover:bg-slate-800 text-white'>
                Delete Inventory
            </button>
        </div>
            <div className={ open ? "hidden": "container mx-10 my-5 flex flex-col"}
                style = {{height: 400, width: '100%'}}>
                    <h2 className=" p-3 bg-slate-300 my-2 rounded ">Inventory</h2>
                    <DataGrid rows= {inventoryData} columns={columns} pageSizeOptions= {[10]}
                    checkboxSelection={true}
                    onRowSelectionModelChange={(item:any)=>{
                        setSelectionModel(item)
                    }}
                    />
            </div>
    </>
  )
}

export default DataTable
