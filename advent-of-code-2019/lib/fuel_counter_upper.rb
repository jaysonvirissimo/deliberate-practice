# frozen_string_literal: true

class FuelCounterUpper
  INPUT_LOCATION = 'data/input.txt'

  def self.read_input
    IO.readlines(INPUT_LOCATION).map(&:to_i)
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
    mass / 3 - 2
  end

  private

  attr_reader :mass
end
