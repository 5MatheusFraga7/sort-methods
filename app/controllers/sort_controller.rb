class SortController < ApplicationController
    # respond_to :html, :json, :csv
    def index 

    end

    def to_buble_sort

        params[:aba] = 'opa'

        render json: { status: 200 }
        
    end
end
