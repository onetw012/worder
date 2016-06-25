import { expect } from 'chai';
import { lists } from '../app/js/reducers/lists/lists';

describe('actions', () => {
	it('should return next word', () => {
		expect(true).to.be.true;
	});

	it('should add new list', () => {
		const actionBefore = [];
		const action = {
			type: 'ADD_LIST',
			id: 0,
			name: 'First list',
			words: []
		};
		const actionAfter = [{
					id: 0,
					name: 'First list',
					words: []
				}];
		expect(lists(actionBefore, action)).to.deep.equal(actionAfter);
	});

	it('should add new word', () => {
		const actionBefore = [{
				id: 0,
				name: 'One',
				words: []
			}];
		const action = {
			type: 'ADD_WORD',
			listId: 0,
			id: 0,
			title: 'One',
			translation: 'Ein',
			description: 'it\'s a number'
		};
		const actionAfter = [{
				id: 0,
				name: 'One',
				words: [{
					id: 0,
					title: 'One',
					translation: 'Ein',
					description: 'it\'s a number'
				}]
			}];
		expect(lists(actionBefore, action)).to.deep.equal(actionAfter);
	});
});