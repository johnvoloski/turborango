require 'spec_helper'

describe Menu do
  subject { build(:menu) }

  context 'validates references' do
    it { expect(subject).to belong_to(:restaurant) }
  end

  context 'validates presence' do
    it { expect(subject).to validate_presence_of(:dish) }
    it { expect(subject).to validate_presence_of(:weekday) }
  end

  context 'validates numericality' do
    it { expect(subject).to validate_numericality_of(:weekday) }
  end

  context 'validates inclusion' do
    it { expect(subject).to ensure_inclusion_of(:weekday).in_range(1..7) }
  end
end
