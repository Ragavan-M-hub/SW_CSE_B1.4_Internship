// Child component
function ProfileCard({name,role}) {
    return(
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
}

// Parent Component
function ProfileList() {
    return(
        <div className="list">
            <h3>Team members</h3>
            {/* Each child component gets different data via props */}
            <ProfileCard name="Rakesh" role="Fullstack developer"/>
            <ProfileCard name="Sanjeev" role="Frontend developer"/>
            <ProfileCard name="Jeslene" role="Backend developer"/>

        </div>
    );
}
export default ProfileList;