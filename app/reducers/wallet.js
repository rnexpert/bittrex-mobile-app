import { 
  RECEIVE_WALLET,
  REQUEST_WALLET,
  WALLET_ERROR
} from '../actions/wallet';

import { RECEIVE_MARKET_SUMMARY } from '../actions/market_summary';

export default function wallet(state = { wallet: null, loading: true }, action) {
  switch (action.type) {
    case REQUEST_WALLET:
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };

    case RECEIVE_WALLET:
      return {
        loading: false,
        wallet: action.wallet,
      };

    case RECEIVE_MARKET_SUMMARY:
      let newWallet = state.wallet;
      newWallet.setMarketSummary(action.market_summary);
      return {
        loading: false,
        wallet: newWallet 
      };

    case WALLET_ERROR:
      return state;

    default:
      return state;
  }
}