import { studurl } from "./config";

export const createstud = async (empData) => {
    const response = await fetch(`${studurl}/Students`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empData)
        });
    const student = await response.json();
    return student;
}

export const getstud = async () => {
    const response = await fetch(`${studurl}/Students`);
    const students = await response.json();
    return students;
}

export const getstud2 = async (studid) => {
    const response = await fetch(`${studurl}/Students/${studid}`);
    const students = await response.json();
    return students;
}

export const deletestudent = async (studid) => {
    const response = await fetch(`${studurl}/Students/${studid}`,
        {
            method: 'DELETE'
        });
    const students = response.json();
    return students;
}

export const updatestudent = async (studid, studData) => {
    const response = await fetch(`${studurl}/Students/${studid}`,
        {
            method: 'PUT',
            body: JSON.stringify(studData),
            headers: { 'Content-Type': 'application/json' }
        });
    const students = await response.json();
    return students;
}