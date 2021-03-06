class Card < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  belongs_to :list
  belongs_to :board
  has_many :actions, dependent: :destroy
  has_many :comments, dependent: :destroy

  def comments_count
    comments.size
  end
end
