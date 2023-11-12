import React, { useState, useEffect } from "react";
import { BreadCrumb } from 'primereact/breadcrumb';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DoctorDetail = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        console.log(props.data);

        if (props.data.length > 0) {

            const filteredData = props.data.map((item) => {
                return {
                    "OrderDate": item.OrderDate[0] ? new Date(item.OrderDate[0]).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '',
                    "ZoneName": item.ZoneName,
                    "firstName": item.firstName,
                    "DoctorsID": item.DoctorsID[0],
                    "DoctorsName": item.DoctorsName[0],
                    "Speciality": item.Speciality[0],
                    "HospitalName": item.HospitalName[0],
                    "hospitalCity": item.hospitalCity,
                    "Indication": item.Indication,
                    "MedicineUsageId": item.MedicineUsageId,
                    "EmpID": item.EmpID,
                    "medID": item.medID,
                    "NoOfPatients": item.NoOfPatients,
                    "NoOfVials": item.NoOfVials,
                    "HospitalCity": item.HospitalCity,
                    "CreatedDate": item.CreatedDate ? new Date(item.CreatedDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '',
                    "prescriptions": item.prescriptions,
                    "strips": item.strips,
                    "TotalValue": item.TotalValue,
                    "arc": item.arc,
                    "PrescriberType": item.PrescriberType,
                    "Target": item.Target,
                    "PapValue": item.PapValue
                }
            });
            setData(filteredData);
        }

    }, [props]);

    const gotBack = () => {
        props.onBackHandler();
    };

    const iconItemTemplate = (item, options) => {
        return (
            <span>{item.label}</span>
        );
    };

    const homeTemplate = () => {
        return (
            <>
                <span className="cursor-pointer" onClick={gotBack}>Home</span>
            </>
        );
    };

    const items = [
        { icon: 'pi pi-sitemap', label: 'Detail', template: iconItemTemplate }
    ];

    const home = { url: 'https://www.primereact.org', template: homeTemplate };

    const cityBodyTamplate = (rowData) => {
        return (
            <>
                <span>{rowData.hospitalCity && rowData.HospitalCity.length > 0 ? rowData.HospitalCity : '-NA-'}</span>
            </>
        );
    };

    const indicationBodyTamplate = (rowData) => {
        return (
            <>
                <span>{rowData.Indication && rowData.Indication.length > 0 ? rowData.Indication : '-NA-'}</span>
            </>
        );
    };

    const vialBodyTamplate = (rowData) => {
        return (
            <>
                <span>{rowData.NoOfVials === -1 ? '-NA-' : rowData.NoOfVials}</span>
            </>
        );
    };

    const stripBodyTamplate = (rowData) => {
        return (
            <>
                <span>{rowData.strips === null ? '-NA-' : rowData.strips}</span>
            </>
        );
    };

    const papBodyTamplate = (rowData) => {
        return (
            <>
                <span>{rowData.PapValue ? rowData.PapValue : '-NA-'}</span>
            </>
        );
    };


    return (
        <>
            <div className="card p-3">
                <BreadCrumb model={items} home={home} />
            </div>

            <div className="card p-3">
                <DataTable value={data} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} emptyMessage="No customers found." showGridlines>
                    <Column field="OrderDate" header="Date" />
                    <Column field="ZoneName" header="Zone" />
                    <Column field="DoctorsName" header="Dr Name" />
                    <Column field="Speciality" header="Speciality" />
                    <Column field="HospitalName" header="Hospital Name" />
                    <Column field="HospitalCity" header="City" body={cityBodyTamplate} />
                    <Column field="Indication" header="Indication" body={indicationBodyTamplate} />
                    <Column field="NoOfPatients" header="No Patients" />
                    <Column field="NoOfVials" header="No Vials" body={vialBodyTamplate} />
                    <Column field="strips" header="No Strips" body={stripBodyTamplate} />
                    <Column field="PapValue" header="Pap" body={papBodyTamplate} />
                </DataTable>
            </div>

        </>
    );
};

export default DoctorDetail;