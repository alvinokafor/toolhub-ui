import Nav from "../components/Nav";
import Card from "../components/Card";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Nav />

      <section className="content-margin dashboard">
        <h1>Dashboard</h1>

        <div className="dashboard-content flex">
          <Card 
          totalTitle='Total number of tools'
          total='34'
          tools='tools'
          />
          <Card 
            missingTitle='Tools with missing information'
            missing='56'
            tools='tools'
          />
           <Card 
            percentTitle='Percentage of tools with missing information'
            percentage='78'
            symbol='%'
            ofTools='of tools'
          />
          <Card 
            editedTitle='Number of tools edited'
            edited='21'
            tools='tools'
          />
        </div>

        
      </section>
    </>
  );
};

export { Dashboard };
