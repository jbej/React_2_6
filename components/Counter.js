var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function(){
        console.log("getDefaultProps: Ustawienie wartości domyślnych");
    },

    componentWillMount: function(){
        console.log("componentWillMount: połączenie z bazą danych lub wysłanie zapytania przed utworzeniem nowego elementu");
    },

    componentDidMount: function(){
        console.log("componentDidMount: dodanie event listener");
    },

    componentWillReceiveProps: function(){
        console.log("componentWillReceiveProps: komponent otrzymuje nowe właściwości (propsy) - aktualizacja.");
    },

    shouldComponentUpdate: function(){
        console.log("shouldComponentUpdate: jeśli chcemy zoptymalizować działanie naszej aplikacji, to możemy tu dodać warunek. Jeśli otrzymamy true to nastąpi update elementu, a gdy false to nie");
    },

    componentWillUpdate: function(){
        console.log("comonentWillUpdate: jeśli shouldComponentUpdate zwróci true to zostaje wykonana");
    },

    componentDidUpdate: function(){
        console.log("componentDidUpdate: manipulacje na drzewie DOM");
    },

    componentWillUnmount: function(){
        console.log("componentEillUnmount: np. odpinanie timerów, nasłuchiwanie zdarzeń");
    },

    render: function() {
        console.log("render: tworzenie elementu");
        return React.createElement('div', {className: 'box'},
            React.createElement('span', {}, 'Licznik' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, "Zwiększ licznik o 1"),
            React.createElement('button', {onClick: this.decrement}, "Zmniejsz licznik o 1")
        );
    },
});
