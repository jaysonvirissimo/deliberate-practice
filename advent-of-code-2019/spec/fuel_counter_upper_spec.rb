require 'spec_helper'
require_relative '../lib/fuel_counter_upper'

describe FuelCounterUpper do
  describe '#call' do
    it { expect(described_class.new(12).call).to eq(2) }
    it { expect(described_class.new(14).call).to eq(2) }
    it { expect(described_class.new(1969).call).to eq(654) }
    it { expect(described_class.new(100756).call).to eq(33583) }
  end
end