import { React, useState } from 'react'
// import data from "./ListData.json"

export const List = (input, datas) => {
    const filteredData = datas.filter((el) => {
        if (input === '') {
            return el;
        } else {
            return el.text.toLowerCase().includes(input)
        }
    })
    return (
        <div className="table-responsive table--no-card m-b-40">
                <table className="table table-borderless table-striped table-earning">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>name ID</th>
                      <th>dob</th>
                      <th className="text-right">gender</th>
                      <th className="text-right">marital</th>
                      <th className="text-right">nationality</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((items) => (
                      <tr>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.dob}</td>
                        <td className="text-right">{items.gender}</td>
                        <td className="text-right">{items.maritial_status}</td>
                        <td className="text-right">{items.nationality}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
    )
}

