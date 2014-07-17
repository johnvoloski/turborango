require 'spec_helper'

describe "menus/show" do
  before(:each) do
    @menu = assign(:menu, stub_model(Menu,
      :dish => "MyText",
      :weekday => 1,
      :restaurant => nil
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/MyText/)
    rendered.should match(/1/)
    rendered.should match(//)
  end
end
