class SortController < ApplicationController
    # respond_to :html, :json, :csv
    def index 

    end

    def to_bubble_sort

        array = [0,2,4,1,3]

        for i in 0..array.size

            if (is_sorted_array?(array))

                for j in i..array.size

                    if ((array[j+1].present?) && (array[i] > array[j+1]))
    
                        bubble_sort_change_positions(array, i, j+1)
    
                    end
    
                end  

            end 
        
        end

        render json: { status: 200 }
        
    end 

    def is_sorted_array?(array)

        for i in 0..array.size

            if (array[i+1].present?)

                if (array[i] > array[i+1])

                    break;

                    return true

                end

            end

        end

        return false

    end

    def bubble_sort_change_positions(array,  position_left, position_right)

        to_right = array[position_left]
        to_left  = array[position_right]

        array[position_right] = to_right
        array[position_left]  = to_left
    end 

end
