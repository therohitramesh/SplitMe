'use strict';

var React = require('react');
var _ = require('underscore');
var Paper = require('material-ui/lib/paper');

var polyglot = require('polyglot');
var utils = require('utils');
var locale = require('locale');
var List = require('Main/List');
var ListSubheader = require('Main/ListSubheader');
var Avatar = require('Main/Avatar');

var AccountBalance = React.createClass({
  propTypes: {
    members: React.PropTypes.array.isRequired,
  },
  render: function() {
    var members = this.props.members;
    var currencies = utils.getCurrenciesWithMembers(members);

    return <div>
      {currencies.map(function(currency) {
        return <div key={currency}>
          {currencies.length > 1 && <ListSubheader subheader={polyglot.t('in_currency', {
            currency: locale.currencyToString(currency)
          })} />}
          <Paper>
            {members.map(function(member) {
              var balance = _.findWhere(member.balances, { currency: currency });

              var avatar = <Avatar contact={member} />;

              return <List key={member.id} left={avatar}>
                {utils.getDisplayName(member) + ' ' + balance.value}
              </List>;
            })}
          </Paper>
        </div>;
      })}
    </div>;
  },
});

module.exports = AccountBalance;