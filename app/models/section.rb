class Section < ApplicationRecord
  belongs_to :rink
  has_many :episodes
end
