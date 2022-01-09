
function SortFrame (container) {

    this.container = container;

}


SortFrame.prototype = {
	
	create: function() {

        var _this = this;

        var label_text = $('<label/>', { class: 'label_text', text: 'Sort numbers', style: 'font-size: 40px;' });
        _this.container.append(label_text); 
        
        var options_container = $('<div/>', { class: 'options-container' });
        _this.container.append(options_container);        

        var btn_generate_numbers = $('<button/>', { class: 'btn', text: 'Generate numbers', id: 'btn_generate_numbers', style: "background: #DBD8E3; margin: 5px;" });
        options_container.append(btn_generate_numbers);     

        var btn_sort_numbers = $('<button/>', { class: 'btn btn-secondary', text: 'Sort', id: 'btn_sort_numbers', style: "margin: 5px;" });
        options_container.append(btn_sort_numbers); 

        var number_container = $('<div/>', { class: 'number-container' });
        _this.container.append(number_container); 

        // Button actions

		btn_generate_numbers.unbind('click').on('click', function(e) {

            _this.drawNumbers();

		});

        btn_sort_numbers.unbind('click').on('click', function(e) {
            
            _this.sortNumbers();

		});
    },
    
    drawNumbers: function() {

        $(".number-container").html("");

        for (let index = 0; index < 15; index++) {

           var random_number = Math.floor(Math.random() * 10);
          
           var btn = $('<div/>', { class: 'random_number', text: random_number, id: random_number });    
           $(".number-container").append(btn);
            
        }

    },
 
    sortNumbers: function() {

    }

}

