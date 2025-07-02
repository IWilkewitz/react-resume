import React from 'react';

const NavBar = () => {
  return (
    <div
        style={{
            backgroundColor: 'rgb(231, 245, 245)',
            // backgroundColor: '#ebd7c1',
            color: '#140400',
            fontWeight: 'bold',
            // width: '1280px',
            width: '100%',
            height: '75px',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // borderRadius: "100px",
            outlineStyle: "solid",
            outlineWidth: "3px",
            outlineColor: "76, 87, 96",
            // boxShadow: "5px 5px 2px 2px rgba(0, 0, 0, 0.2)",
            position: "absolute", // Ensures it starts at the top
            top: 0, // Pushes it to the very top
            // left: 0, // Ensures alignment from the left
            
            

        }}>
      <table>
        <tr>
          <td class="nav"><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a></td>
          <td class="nav"><a href="index.css">WorkSmarterTools</a></td>
          <td class="nav"><a href="https://www.linkedin.com/in/ianwi/" target="_blank" rel="noopener noreferrer">LinkedIn</a></td>
          <td class="nav"><a href="/map.html" target="_blank" rel="noopener noreferrer">Mortgage Data</a></td>

        </tr>
      </table>
    </div>
  );
}

export default NavBar;