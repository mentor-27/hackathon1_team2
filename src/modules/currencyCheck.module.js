import { Module } from '../core/module';

export default class CurrencyCheck extends Module {
  constructor(type = 'currency_check', text = 'Курс BTC') {
    super(type, text);
    this.currencyBlock = document.createElement('div');
    this.currencyBlock.className = 'currency-block';
    this.currencyTitle = document.createElement('div');
    this.currencyTitle.className = 'currency-title';
    this.currencyContent = document.createElement('div');
    this.currencyContent.className = 'currency-content';
    this.currencyBlock.append(this.currencyTitle);
    this.currencyBlock.append(this.currencyContent);
  }

  trigger() {
    this.currencyTitle.textContent = 'BTC/USD';
    document.body.append(this.currencyBlock);
  }
}
