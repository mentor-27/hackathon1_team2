import { Module } from '../core/module';
import arrow from '../assets/arrow.svg';

export default class CurrencyCheck extends Module {
  constructor(type = 'currency_check', text = 'Курс BTC') {
    super(type, text);
    this.#buildHTML();
    this.momentPrice = 0;
  }

  #buildHTML() {
    this.currencyBlock = document.createElement('div');
    this.currencyBlock.className = 'currency-block';
    this.currencyTitle = document.createElement('div');
    this.currencyTitle.className = 'currency-title';
    this.currencyContent = document.createElement('div');
    this.currencyContent.className = 'currency-content';
    this.priceArrow = document.createElement('img');
    this.priceArrow.className = 'price-arrow';
    this.priceArrow.src = arrow;
    this.btcBlock = document.createElement('span');
    this.rubBlock = document.createElement('span');
    this.currencyBlock.append(this.currencyTitle);
    this.currencyBlock.append(this.currencyContent);
    this.currencyContent.append(this.priceArrow, this.btcBlock, this.rubBlock);
  }

  trigger() {
    this.currencyTitle.textContent = 'BTC / RUB';
    document.body.append(this.currencyBlock);
    this.#getData('bitcoin');
    setInterval(() => this.#getData(), 1000);
  }

  #parseData(data) {
    const btcText = `${data.priceBtc} ${data.symbol}`;
    const rubText = `${data.price.toLocaleString('ru-RU')} RUB`;
    if (this.momentPrice === data.price) this.rubBlock.removeAttribute('style');
    if (this.momentPrice < data.price) {
      this.priceArrow.style.transform = 'rotate(-90deg)';
      this.rubBlock.style.color = '#3f8600';
    } else if (this.momentPrice > data.price) {
      this.priceArrow.style.transform = 'rotate(90deg)';
      this.rubBlock.style.color = '#cf1322';
    }
    this.momentPrice = data.price;
    this.btcBlock.textContent = btcText;
    this.rubBlock.textContent = rubText;
  }

  #getData(currency) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': '3DtbXo08HkLxZWuJg9IuhhJFS5X98FmbAEG7wBhkKG8='
      }
    };

    return fetch(
      `https://openapiv1.coinstats.app/coins/${currency}?currency=RUB`,
      options
    )
      .then(response => response.json())
      .then(response => this.#parseData(response))
      .catch(err => console.error(err));
  }
}
