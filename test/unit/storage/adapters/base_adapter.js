/* eslint-disable mocha/no-pending-tests */
/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

'use strict';

const { EventEmitter } = require('events');
const BaseAdapter = require('../../../../storage/adapters/base_adapter');
const { ImplementationPendingError } = require('../../../../storage/errors');

describe('BaseAdapter', () => {
	it('should be a constructable function', () => {
		expect(BaseAdapter.prototype).to.be.not.null;
		return expect(BaseAdapter.prototype.constructor.name).to.be.eql(
			'BaseAdapter'
		);
	});

	it('should be be inherited by EventEmitter', () => {
		return expect(BaseAdapter.prototype).to.be.an.instanceof(EventEmitter);
	});

	describe('constructor()', () => {
		it('should accept only one parameter', () => {
			return expect(BaseAdapter).to.have.length(1);
		});

		it('should assign proper parameters', () => {
			const adapter = new BaseAdapter({ engineName: 'my-name', inTest: true });
			expect(adapter.engineName).to.be.eql('my-name');
			return expect(adapter.inTest).to.be.eql(true);
		});
	});

	describe('interfaces', () => {
		let adapter;
		beforeEach(done => {
			adapter = new BaseAdapter({ engineName: 'my-name', inTest: true });
			done();
		});

		describe('connect', () => {
			it('should throw error', () => {
				return expect(adapter.connect).to.throw(ImplementationPendingError);
			});
		});

		describe('disconnect', () => {
			it('should throw error', () => {
				return expect(adapter.connect).to.throw(ImplementationPendingError);
			});
		});

		describe('execute', () => {
			it('should throw error', () => {
				return expect(adapter.connect).to.throw(ImplementationPendingError);
			});
		});

		describe('executeFile', () => {
			it('should throw error', () => {
				return expect(adapter.connect).to.throw(ImplementationPendingError);
			});
		});

		describe('transaction', () => {
			it('should throw error', () => {
				return expect(adapter.connect).to.throw(ImplementationPendingError);
			});
		});

		describe('task', () => {
			it('should throw error', () => {
				return expect(adapter.connect).to.throw(ImplementationPendingError);
			});
		});

		describe('loadSQLFile', () => {
			it('should throw error', () => {
				return expect(adapter.connect).to.throw(ImplementationPendingError);
			});
		});

		describe('parseQueryComponent', () => {
			it('should throw error', () => {
				return expect(adapter.connect).to.throw(ImplementationPendingError);
			});
		});
	});
});