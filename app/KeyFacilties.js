import "./KeyFacilities.css";

const KeyFacilities = () => {
  return (
    <div className="facilites">
      <h3>Key Facilities at NavGurukul</h3>
      <div className="img-text">
        <img
          className="navgurukul"
          src="https://www.navgurukul.org/static/media/keyFacilities.37b75bb0.png"
          alt="Illustration"
        />
        <ul>
          <li>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAITSURBVHgB3VVdchJBEO7uJS9WpcQq0fINboAncOAC6ruR5QZ6AuEEegMgFzBeIIwnCJ7AzZMWpCqk8vMSmE43gWRns8suyVPyvezM7Mz3fb3T3Qvw2IF5G45azZ4+L9F13/RtpOPJJ2MgoPcyrFYG+x/vLTDeaYZI0LtdYbs8ZlYrM3QNEbZZHCVYAyL4xr4fk9yzxaQGahkUfgR/Q1N+NgsMBfxO3NbTCDNoRhqdm+Pvi9Lc1vp2CmkRbDMdcMDVFO0cqBmoi7EvwhFBLCLytgFG8EAwcBSf+wLsDmEzTJOEjuEkU4AQGQpCiEdn6Gpz5EZ8HRGPUwU0t4U9hILk50KslxkAlD0B4fgXSp3czgFkobqlF5zYnEc+Dk2dmIYp56ZSH2+1MBcRlDjopZKj+yoO9jYkV5RLjIsCXQjMcN5W1YTXUaVvf7yUVsDMgw3IlxFw++YTKSb63eSQrwGdyu5+V4dahAXJNfJGZdk+vGoaf270JQtaWSJFyB3zr9e7ww+ruVfJQv78rhvo/N9pniBjRMy9vERIpmmi2WFZLScREHxfXDHkA2HVaq5B617eBwhYjc+9CE4ld7cBjHNkpKilo2IdCoEtM/4hcvYUwPqCGTiWrLlkPEg6ukMtvejVYJj5P6CsFy8kJXGZy3Gn4sl6S8hdWIPcpj9pNX8ywyGS21vltraWwGFHm6MUYhueNK4A/Tb6psjs+5UAAAAASUVORK5CYII="
              alt="Icon"
            />
            All expenses are paid by Navgurukul and free for the student
          </li>
          <li>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAITSURBVHgB3VVdchJBEO7uJS9WpcQq0fINboAncOAC6ruR5QZ6AuEEegMgFzBeIIwnCJ7AzZMWpCqk8vMSmE43gWRns8suyVPyvezM7Mz3fb3T3Qvw2IF5G45azZ4+L9F13/RtpOPJJ2MgoPcyrFYG+x/vLTDeaYZI0LtdYbs8ZlYrM3QNEbZZHCVYAyL4xr4fk9yzxaQGahkUfgR/Q1N+NgsMBfxO3NbTCDNoRhqdm+Pvi9Lc1vp2CmkRbDMdcMDVFO0cqBmoi7EvwhFBLCLytgFG8EAwcBSf+wLsDmEzTJOEjuEkU4AQGQpCiEdn6Gpz5EZ8HRGPUwU0t4U9hILk50KslxkAlD0B4fgXSp3czgFkobqlF5zYnEc+Dk2dmIYp56ZSH2+1MBcRlDjopZKj+yoO9jYkV5RLjIsCXQjMcN5W1YTXUaVvf7yUVsDMgw3IlxFw++YTKSb63eSQrwGdyu5+V4dahAXJNfJGZdk+vGoaf270JQtaWSJFyB3zr9e7ww+ruVfJQv78rhvo/N9pniBjRMy9vERIpmmi2WFZLScREHxfXDHkA2HVaq5B617eBwhYjc+9CE4ld7cBjHNkpKilo2IdCoEtM/4hcvYUwPqCGTiWrLlkPEg6ukMtvejVYJj5P6CsFy8kJXGZy3Gn4sl6S8hdWIPcpj9pNX8ywyGS21vltraWwGFHm6MUYhueNK4A/Tb6psjs+5UAAAAASUVORK5CYII="
              alt="Icon"
            />
            Equipped with shared dorms, fully functional kitchen and other <br /> amenities of daily use
          </li>
          <li>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAITSURBVHgB3VVdchJBEO7uJS9WpcQq0fINboAncOAC6ruR5QZ6AuEEegMgFzBeIIwnCJ7AzZMWpCqk8vMSmE43gWRns8suyVPyvezM7Mz3fb3T3Qvw2IF5G45azZ4+L9F13/RtpOPJJ2MgoPcyrFYG+x/vLTDeaYZI0LtdYbs8ZlYrM3QNEbZZHCVYAyL4xr4fk9yzxaQGahkUfgR/Q1N+NgsMBfxO3NbTCDNoRhqdm+Pvi9Lc1vp2CmkRbDMdcMDVFO0cqBmoi7EvwhFBLCLytgFG8EAwcBSf+wLsDmEzTJOEjuEkU4AQGQpCiEdn6Gpz5EZ8HRGPUwU0t4U9hILk50KslxkAlD0B4fgXSp3czgFkobqlF5zYnEc+Dk2dmIYp56ZSH2+1MBcRlDjopZKj+yoO9jYkV5RLjIsCXQjMcN5W1YTXUaVvf7yUVsDMgw3IlxFw++YTKSb63eSQrwGdyu5+V4dahAXJNfJGZdk+vGoaf270JQtaWSJFyB3zr9e7ww+ruVfJQv78rhvo/N9pniBjRMy9vERIpmmi2WFZLScREHxfXDHkA2HVaq5B617eBwhYjc+9CE4ld7cBjHNkpKilo2IdCoEtM/4hcvYUwPqCGTiWrLlkPEg6ukMtvejVYJj5P6CsFy8kJXGZy3Gn4sl6S8hdWIPcpj9pNX8ywyGS21vltraWwGFHm6MUYhueNK4A/Tb6psjs+5UAAAAASUVORK5CYII="
              alt="Icon"
            />
            Classrooms and large residential spaces
          </li>
          <li>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAITSURBVHgB3VVdchJBEO7uJS9WpcQq0fINboAncOAC6ruR5QZ6AuEEegMgFzBeIIwnCJ7AzZMWpCqk8vMSmE43gWRns8suyVPyvezM7Mz3fb3T3Qvw2IF5G45azZ4+L9F13/RtpOPJJ2MgoPcyrFYG+x/vLTDeaYZI0LtdYbs8ZlYrM3QNEbZZHCVYAyL4xr4fk9yzxaQGahkUfgR/Q1N+NgsMBfxO3NbTCDNoRhqdm+Pvi9Lc1vp2CmkRbDMdcMDVFO0cqBmoi7EvwhFBLCLytgFG8EAwcBSf+wLsDmEzTJOEjuEkU4AQGQpCiEdn6Gpz5EZ8HRGPUwU0t4U9hILk50KslxkAlD0B4fgXSp3czgFkobqlF5zYnEc+Dk2dmIYp56ZSH2+1MBcRlDjopZKj+yoO9jYkV5RLjIsCXQjMcN5W1YTXUaVvf7yUVsDMgw3IlxFw++YTKSb63eSQrwGdyu5+V4dahAXJNfJGZdk+vGoaf270JQtaWSJFyB3zr9e7ww+ruVfJQv78rhvo/N9pniBjRMy9vERIpmmi2WFZLScREHxfXDHkA2HVaq5B617eBwhYjc+9CE4ld7cBjHNkpKilo2IdCoEtM/4hcvYUwPqCGTiWrLlkPEg6ukMtvejVYJj5P6CsFy8kJXGZy3Gn4sl6S8hdWIPcpj9pNX8ywyGS21vltraWwGFHm6MUYhueNK4A/Tb6psjs+5UAAAAASUVORK5CYII="
              alt="Icon"
            />Provision of laptop, internet, mentors, english classes, mental <br /> health counselling
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KeyFacilities;

