import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SmoothieBuilder} from './SmoothieBuilder';
import BuildControls from '../../components/Smoothie/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<SmoothieBuilder/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SmoothieBuilder onInitIngredients={() => {}}/>);
    });

    it('shoul render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings : { milk:0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })

});