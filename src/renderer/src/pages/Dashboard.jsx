import CustomPieChart from '../components/CustomPieChart'

function Dashboard() {
  const TicketStatusData = [
    { name: 'Done', value: 123 },
    { name: 'In Progress', value: 300 },
    { name: 'Pending', value: 300 },
    { name: 'Declined', value: 200 }
  ]

  return (
    <>
      <div className="bg-primary text-light p-1 mt-3">
        <span className="fs-4 fw-semibold ms-3">Dashboard</span>
      </div>
      <div className="row m-0 justify-content-center align-items-center g-2 border">
        <h4 className="text-center mt-4 border">Ticket Status Overview</h4>
        <div className="col-xl-3 col-md-6 col-sm-12" style={{ height: '300px' }}>
          <CustomPieChart data={TicketStatusData} />
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 border">Column</div>
        <div className="col-xl-3 col-md-6 col-sm-12 border">Column</div>
        <div className="col-xl-3 col-md-6 col-sm-12 border">Column</div>
        <div className="col-xl-3 col-md-6 col-sm-12 border">Column</div>
        <div className="col-xl-3 col-md-6 col-sm-12 border">Column</div>
        <div className="col-xl-3 col-md-6 col-sm-12 border">Column</div>
        <div className="col-xl-3 col-md-6 col-sm-12 border">Column</div>
      </div>
    </>
  )
}
export default Dashboard
