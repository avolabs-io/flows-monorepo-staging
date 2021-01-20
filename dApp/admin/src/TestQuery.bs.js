// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as ApolloClient__React_Hooks_UseQuery from "rescript-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js";

var Raw = {};

var query = (require("@apollo/client").gql`
  query ($usersName: String!)  {
    user(where: {name: {_eq: $usersName}})  {
      __typename
      description
      ethAddress
      name
    }
  }
`);

function parse(value) {
  var value$1 = value.user;
  return {
          user: value$1.map(function (value) {
                var value$1 = value.description;
                return {
                        __typename: value.__typename,
                        description: !(value$1 == null) ? value$1 : undefined,
                        ethAddress: value.ethAddress,
                        name: value.name
                      };
              })
        };
}

function serialize(value) {
  var value$1 = value.user;
  var user = value$1.map(function (value) {
        var value$1 = value.name;
        var value$2 = value.ethAddress;
        var value$3 = value.description;
        var description = value$3 !== undefined ? value$3 : null;
        var value$4 = value.__typename;
        return {
                __typename: value$4,
                description: description,
                ethAddress: value$2,
                name: value$1
              };
      });
  return {
          user: user
        };
}

function serializeVariables(inp) {
  return {
          usersName: inp.usersName
        };
}

function makeVariables(usersName, param) {
  return {
          usersName: usersName
        };
}

var UserQuery_inner = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables
};

var include = ApolloClient__React_Hooks_UseQuery.Extend({
      query: query,
      Raw: Raw,
      parse: parse,
      serialize: serialize,
      serializeVariables: serializeVariables
    });

var use = include.use;

var UserQuery_refetchQueryDescription = include.refetchQueryDescription;

var UserQuery_useLazy = include.useLazy;

var UserQuery_useLazyWithVariables = include.useLazyWithVariables;

var UserQuery = {
  UserQuery_inner: UserQuery_inner,
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  refetchQueryDescription: UserQuery_refetchQueryDescription,
  use: use,
  useLazy: UserQuery_useLazy,
  useLazyWithVariables: UserQuery_useLazyWithVariables
};

function TestQuery(Props) {
  var queryResult = Curry.app(use, [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        {
          usersName: "Jason"
        }
      ]);
  var match = queryResult.data;
  var tmp;
  var exit = 0;
  if (match !== undefined || !queryResult.loading) {
    exit = 1;
  } else {
    tmp = React.createElement("p", undefined, "Loading");
  }
  if (exit === 1) {
    var error = queryResult.error;
    if (error !== undefined) {
      console.log(error);
      tmp = React.createElement("p", undefined, "Data is loaded");
    } else if (match !== undefined) {
      var match$1 = Belt_Array.get(match.user, 0);
      tmp = match$1 !== undefined ? React.createElement("p", undefined, "Users is loaded their name is " + match$1.name + ", with this eth address " + match$1.ethAddress) : React.createElement("p", undefined, "Data loaded, none found");
    } else {
      tmp = React.createElement("p", undefined, "Error loading data");
    }
  }
  return React.createElement("div", undefined, tmp);
}

var make = TestQuery;

export {
  UserQuery ,
  make ,
  
}
/* query Not a pure module */
