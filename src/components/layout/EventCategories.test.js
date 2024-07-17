import { fireEvent, getAllByText, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import configureMockStore from 'redux-mock-store';
import EventCategories from './EventCategories';
import * as reactRedux from 'react-redux';
import ColorContext from '../../context/ColorContext';
import { MemoryRouter as Router } from "react-router-dom";


const eventData = [
    {
        "id": 1,
        "img": "require('../../assets/drinks.jpg')",
        "category": "Music",
        "date": "07/21/2024",
        "time": "7pm",
        "city": "Bangalore",
        "venue": "Leela Palace",
        "desc": "An amazing evening with Pandit Ravi Shankar",
        "ticketPrice": "1500 INR"
    },
    {
        "id": 2,
        "img": "require('../../assets/drinks.jpg')",
        "category": "Sports",
        "date": "07/11/2024",
        "time": "2pm",
        "city": "Kolkata",
        "venue": "Vedic Village",
        "desc": "A talk show with world champion Emi Martinez",
        "ticketPrice": "1880 INR"
    },
    {
        "id": 3,
        "img": "require('../../assets/drinks.jpg')",
        "category": "Music",
        "date": "08/15/2024",
        "time": "9pm",
        "city": "Mumbai",
        "venue": "Hotel Lalit",
        "desc": "A wonderful electronic musical journey with the world famous dj Ben Bohmer",
        "ticketPrice": "1999 INR"
    }
]

const mockStore = (state = initialState) => configureMockStore()(state);

const mockState = {
    events: {
        data: eventData,
        loading: false,
        error: null
    }
};

const DummyEventItem = () => {
    return (
        <reactRedux.Provider store={mockStore(mockState)}>
            <ColorContext.Provider value={{ isDark: false }}>
                <Router>
                    <EventCategories />
                </Router>
            </ColorContext.Provider>
        </reactRedux.Provider>
    )
}

describe('it says', () => {
    const mockUseSelector = jest.fn();
    jest.mock("react-redux", () => ({
        ...jest.requireActual('react-redux'),
        useSelector: () => mockUseSelector

    }))

    beforeEach(() => {
        mockUseSelector.mockImplementation((callback) => {
            return callback(
                {
                    events: {
                        data: eventData,
                        loading: false,
                        error: null
                    }
                }
            )
        })
    })

    it('component is rendering successfully', () => {
        render(
            <DummyEventItem />
        )
    })

    it('data filtered correctly on category button click', () => {
        const { getAllByText } = render(
            <DummyEventItem />
        )

        eventData.map(event => {
            return event.category;
        }).forEach(category => {
            expect(getAllByText(category).length).toBeTruthy();
        })
    })

    it('data filtered correctly on category button click', () => {
        render(
            <DummyEventItem />
        )
        
        const buttons = screen.getAllByRole('button');
        buttons.forEach(button => {
            user.click(button);
        })
    })
})