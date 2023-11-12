import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './DoctorList.css';
import ProductContext from '../../Context/Product/ProductContext';
import axios from "axios";
import LoginContext from '../../Context/Login/LoginContext';
import { getEmpId } from '../../Service/Common';
import configData from '../../Config/Config.json';
import Loader from '../../Component/Loader/Loader';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';


const DoctorList = () => {

    const productContext = useContext(ProductContext);
    const loginContext = useContext(LoginContext);
    const [isLoaderVisible, setIsLoaderVisible] = useState(true);

    const [doctorList, setDoctorList] = useState(null);
    const url = `${configData.SERVER_URL}/getmydoctorlist/${loginContext.userData.empId ? loginContext.userData.empId : getEmpId()}`;

    const navigate = useNavigate();

    const goto = (obj, actionName) => {
        console.log(obj);
        navigate(`/product/${obj.doctorID}/${actionName}`);
        productContext.addProduct(obj);
    };

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });

    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const header = renderHeader();

    useEffect(() => {
        axios.get(url).then((resp) => {

            const respData = resp.data.map((item) => {
                return {
                    customerCode: item.customerCode ? item.customerCode : '-NA-',
                    doctorName: item.doctorName ? item.doctorName : '-NA-',
                    specialtyName: item.specialtyName ? item.specialtyName : '-NA-',
                    cityName: item.cityName ? item.cityName : '-NA-',
                    StateName: item.StateName ? item.StateName : '-NA-',
                    hospitalName: item.hospitalName ? item.hospitalName : '-NA-',
                    doctorID: item.doctorID
                }
            });

            // console.log(respData);
            // console.log('====================================');
            // console.log(resp.data);

            setDoctorList(respData);
            setIsLoaderVisible(false);
        }).catch((err) => {
            console.log(err)
        });
    }, []);

    const actionTemplate = (doctorList) => {
        return (
            <div className='action-btn'>
                <Button label="AA" raised onClick={() => { goto(doctorList, 'aa') }} />
                <Button label="ITP" raised onClick={() => { goto(doctorList, 'itp') }} />
                <Button label="TDR" raised onClick={() => { goto(doctorList, 'tdr') }} />
            </div>
        );
    };

    return (
        <>
            {isLoaderVisible && <Loader />}
            <div className="card p-3">
                <h2>Doctor List</h2>
                <DataTable value={doctorList} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} emptyMessage="No customers found." filters={filters}
                    globalFilterFields={['doctorName', 'specialtyName', 'cityName', 'StateName', 'hospitalName']} header={header} showGridlines paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" >
                    <Column field="customerCode" header="Customer Code" />
                    <Column field="doctorName" header="Name" />
                    <Column field="specialtyName" header="Speciality" />
                    <Column field="cityName" header="City" />
                    <Column field="StateName" header="State" />
                    <Column field="hospitalName" header="Hospital Name" />
                    <Column header="Action" body={actionTemplate} />
                </DataTable>
            </div>
        </>
    )
};

export default DoctorList;