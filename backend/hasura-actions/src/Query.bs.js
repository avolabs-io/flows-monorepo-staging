// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ApolloClient__React_Hooks_UseMutation = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseMutation.bs.js");

var Raw = {};

var query = (require("@apollo/client").gql`
  mutation CreatePayment($amount: String!, $interval: Int!, $numberOfPayments: Int!, $recipient: String!, $start: Int!, $state: String, $tokenAddress: String!)  {
    insert_streams_one(object: {amount: $amount, interval: $interval, numberOfPayments: $numberOfPayments, numberOfPaymentsMade: 0, recipient: $recipient, start: $start, state: $state, tokenAddress: $tokenAddress})  {
      __typename
      id
    }
  }
`);

function parse(value) {
  var value$1 = value.insert_streams_one;
  return {
          insert_streams_one: !(value$1 == null) ? ({
                __typename: value$1.__typename,
                id: value$1.id
              }) : undefined
        };
}

function serialize(value) {
  var value$1 = value.insert_streams_one;
  var insert_streams_one;
  if (value$1 !== undefined) {
    var value$2 = value$1.id;
    var value$3 = value$1.__typename;
    insert_streams_one = {
      __typename: value$3,
      id: value$2
    };
  } else {
    insert_streams_one = null;
  }
  return {
          insert_streams_one: insert_streams_one
        };
}

function serializeVariables(inp) {
  var a = inp.state;
  return {
          amount: inp.amount,
          interval: inp.interval,
          numberOfPayments: inp.numberOfPayments,
          recipient: inp.recipient,
          start: inp.start,
          state: a !== undefined ? a : undefined,
          tokenAddress: inp.tokenAddress
        };
}

function makeVariables(amount, interval, numberOfPayments, recipient, start, state, tokenAddress, param) {
  return {
          amount: amount,
          interval: interval,
          numberOfPayments: numberOfPayments,
          recipient: recipient,
          start: start,
          state: state,
          tokenAddress: tokenAddress
        };
}

var CreatePaymentStream_inner = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables
};

var include = ApolloClient__React_Hooks_UseMutation.Extend({
      query: query,
      Raw: Raw,
      parse: parse,
      serialize: serialize,
      serializeVariables: serializeVariables
    });

var CreatePaymentStream_use = include.use;

var CreatePaymentStream_useWithVariables = include.useWithVariables;

var CreatePaymentStream = {
  CreatePaymentStream_inner: CreatePaymentStream_inner,
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  use: CreatePaymentStream_use,
  useWithVariables: CreatePaymentStream_useWithVariables
};

exports.CreatePaymentStream = CreatePaymentStream;
/* query Not a pure module */
