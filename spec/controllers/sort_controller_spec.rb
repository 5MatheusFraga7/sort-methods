require "rails_helper"

RSpec.describe SortController, :type => :controller do
    describe "GET index -- Action of enter on site" do 
        it "has a 200 status code" do 
            get :index
            expect(response.status).to eq(200)
        end
    end
end