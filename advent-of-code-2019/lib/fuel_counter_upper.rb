class FuelCounterUpper
  INPUT_LOCATION = '../data/input.txt'

  def self.read_input

  end

  def self.call
    read_input.map do |input|
      new(input).call
    end.sum
  end

  def initialize(mass)
    @mass = mass
  end

  def call
  end
end