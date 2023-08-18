import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {

  const mockData = data.result;
  const rowsTitle = ["91-100", "81-90", "71-80", "61-70", "51-60", "41-50", "31-40", "21-30", "11-20", "1-10"];

  const rows = rowsTitle.map((data) => {

    const bucket = data.split("-")[1];
    return {
      column1: data,
      column2: getDomains('a', bucket),
      column3: getDomains('b', bucket),
    }

  })

  function getDomains(domainOption, bucket) {

    return mockData[`domain_${domainOption}`].page_buckets[bucket];
    
  }

  function parseContent(content){

    return content.map((value) => (
        <div>
          <a href={value}>{value}</a>
        </div>
      )
    )

  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.column1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.column1}
              </TableCell>
              <TableCell align="right">
                {parseContent(row.column2)}
              </TableCell>
              <TableCell align="right">
                {parseContent(row.column3)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const data = {

  "result": {

    "domain_a": {

      "name": "google.com",
      "page_buckets": {

        "100": [],
        "90": [],
        "80": [],
        "70": ["myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com"],
        "60": [],
        "50": [],
        "40": [],
        "30": ["myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com"],
        "20": [],
        "10": []

      }


    },


    "domain_b": {

      "name": "apple.com",
      "page_buckets": {

        "100": ["myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com"],
        "90": ["myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com"],
        "80": [],
        "70": [],
        "60": [],
        "50": [],
        "40": ["myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com", "myownpersonaldomain.com"],
        "30": [],
        "20": [],
        "10": []

      }

    }


  }

}