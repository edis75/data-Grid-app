import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable, { SortOrder } from "react-data-table-component"; 
import "../css/countries.css";

const ContruiesTable = () =>{
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    const [search,setSearch]=useState("");
    const [countries,setCountries]=useState([]);
    const [filteredCountries,setfilteredCountries]=useState([]);
    const getCountries=async()=>{
      try{
        const response=await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
        setfilteredCountries(response.data);
      }catch(error){
        console.log(error);
      }
    };
  
    useEffect(()=>{
      getCountries();
    },[]);
    
  
    useEffect(()=>{
        const result=countries.filter((country)=>{
            return country.name.toLowerCase().match(search.toLowerCase());
            
        });
        setfilteredCountries(result);
      },[search]);
    
      
    const columns=[
  
      {
        name:"Country Name",
        selector:(row)=>row.name,
        sortable:true
      },
      {
        name:"Country Native Name",
        selector:(row)=>row.nativeName
      },
      {
        name:"Country Capital",
        selector:(row)=>row.capital
      },
      {
        name:"Country flag",
        selector:(row)=><img width={50} height={50} src={row.flag} alt={row.name}/>
      },
      {
        name:'Action',
        cell:   (row)=><button class="red-button" 
        onClick={()=>alert(row.callingCodes)}
        > Edit</button>
      }
      
  
    ]
    
    return <DataTable
     title="Country List" 
     columns={columns} 
     data={filteredCountries}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='400'
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input 
        class="search-box"
        type='text'
        placeholder='Arama Kısmı'
        className='w-25 form-control'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        
      }
      subHeaderAlign='left'
      />
}
export default ContruiesTable;

//   actions={<button className='yeni_hesap'>Yeni Hesap + </button>}