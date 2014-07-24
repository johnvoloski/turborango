# -*- encoding : utf-8 -*-
require 'spec_helper'

describe Restaurant do
  subject { build(:restaurant) }

  context 'validates references' do
    it { expect(subject).to have_many(:menus) }
  end

  context 'validates presence' do
    it { expect(subject).to validate_presence_of(:name) }
    it { expect(subject).to validate_presence_of(:price) }
    it { expect(subject).to validate_presence_of(:latitude) }
    it { expect(subject).to validate_presence_of(:longitude) }
  end

  context 'validates numericality' do
    it { expect(subject).to validate_numericality_of(:price) }
    it { expect(subject).to validate_numericality_of(:latitude) }
    it { expect(subject).to validate_numericality_of(:longitude) }
  end
end
