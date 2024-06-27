import Banner from "./Banner";
import EventCategories from "./EventCategories";
import EventsList from "./EventsList";

function MainBody() {
    return (
        <div className="main-body-container">
            <Banner />
            <EventCategories />
            <EventsList />
        </div>
    )
}

export default MainBody;
