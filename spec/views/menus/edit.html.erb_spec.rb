require 'spec_helper'

describe "menus/edit" do
  before(:each) do
    @menu = assign(:menu, stub_model(Menu,
      :dish => "MyText",
      :weekday => 1,
      :restaurant => nil
    ))
  end

  it "renders the edit menu form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", menu_path(@menu), "post" do
      assert_select "textarea#menu_dish[name=?]", "menu[dish]"
      assert_select "input#menu_weekday[name=?]", "menu[weekday]"
      assert_select "input#menu_restaurant[name=?]", "menu[restaurant]"
    end
  end
end
