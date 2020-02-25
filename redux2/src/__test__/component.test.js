import React from 'react';
import Header from '../component/Header';
import { create } from 'react-test-render';


describe('Snapshot Component',() => {
    test('testing header component',() => {
        let tree = create(<Header/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})