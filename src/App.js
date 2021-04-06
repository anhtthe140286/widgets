import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end js framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among us'
    },
    {
        title: 'How do you use React?',
        content: 'By creating components'
    }
];

const options = [
    {
        label: 'Color red',
        value: 'red'
    },
    {
        label: 'Color green',
        value: 'green'
    },
    {
        label: 'Color blue',
        value: 'blue'
    }
];

// const showComponent = (route, component) => {
//     return (window.location.pathname === route)
//         ? component : null;
// };

export default () => {
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    // return (
    // <div>
    //     <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
    //     {
    //         showDropdown ?
    //             <Dropdown
    //                 selected={selected}
    //                 onSelectedChange={setSelected}
    //                 options={options}
    //             /> : null
    //     }

    //     {/* <Dropdown selected={selected} onSelectedChange={setSelected} options={options} /> */}
    // </div>
    // );


    //Accordion is a children of the Route

    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

