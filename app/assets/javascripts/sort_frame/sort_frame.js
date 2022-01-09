function SortFrame (container) {

    this.container = container;

}


SortFrame.prototype = {
	
	create: function() {

        var _this = this;

        var label_text = $('<label/>', { class: '', text: 'Select numbers', style: 'text-align: center; padding: 20px;' });
        _this.container.append(label_text); 
        
        var numbers_container = $('<div/>', { class: 'numbers-container' });
        _this.container.append(numbers_container);        

        for (let index = 0; index < 20; index++) {

           var random_number = Math.floor(Math.random() * 10);
          
           var btn = $('<button/>', { class: 'btn btn-primary', text: random_number, id: random_number });
           numbers_container.append(btn);          
            
        }
	}

}

