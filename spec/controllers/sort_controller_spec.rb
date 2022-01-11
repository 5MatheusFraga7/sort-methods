require "rails_helper"

RSpec.describe SortController, :type => :controller do
    describe "GET index -- Action of enter on site" do 
        it "has a 200 status code" do 
            get :index
            expect(response.status).to eq(200)
        end
    end

    describe "GET to_buble_sort -- Action of sort with buble sort method" do
        it "has a 200 status code" do 
            get :to_buble_sort
            expect(response.status).to eq(200)
        end

        it "array was sorted" do 
            ## 
        end 
    end
end