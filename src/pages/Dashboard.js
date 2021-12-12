import UserList from "../components/Users/UserList";

const DUMMY_DATA =[
    {
        id: 'm1',
        name: 'Ayo',
        title: 'Loan Status',
        address: '5,Mojibade Str',
        totalAmountBorrowed: '$5000',
        credit: '$1000',
        turnover:'$4000',

    },
    {
        id: 'm2',
        name: 'Tobi',
        title: 'Loan Status',
        address: '3, olorunsogo street',
        totalAmountBorrowed: '$2000',
        credit: '$1000',
        turnover: '$1000',
    },
];

function Dashboard() {
    return (
        <section>
            <h1>User Details</h1>
              <UserList  users = {DUMMY_DATA}/>
        </section>
    );
}

export default Dashboard;