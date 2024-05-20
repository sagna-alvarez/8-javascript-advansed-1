import { AbstractView } from "../../common/view";

export class MainView extends AbstractView {
    constructur() {
        super();
        this.setTitle('Поиск книг');
    }
    render() {
        const main = document.createElementment('div');
        main.innerHTML = 'Тест';
        this.app.innerHTML = '';
        this.app.append(main);
    }
}