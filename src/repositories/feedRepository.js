const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class FeedRepository {
    async createFeed(feedData) {
        try {
            console.log("Creating feed with data:", feedData); // Log input data
            return await prisma.fundingFeed.create({
                data: {
                    id: feedData.id,
                    userId: feedData.userId,
                    executiveSummary: feedData.executiveSummary,
                    thumbnail: feedData.thumbnail,
                    pitchDeck: feedData.pitchDeck,
                    amountRaised: feedData.amountRaised,
                    endDate: new Date(feedData.endDate) // Ensure proper Date object
                }
            });
        } catch (error) {
            console.log("Error creating feed: ", error);
            throw error;
        }
    }

    async findAllFeeds() {
        try {
            return await prisma.fundingFeed.findMany();
        } catch (error) {
            console.log("Error finding all feeds: ", error);
            throw error;
        }
    }

    async findFeedById(id) {
        try {
            return await prisma.fundingFeed.findUnique({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.log("Post not found: ", error);
            throw error;
        }
    }

    async updateFeed(id, feedData) {
        try {
            return await prisma.fundingFeed.update({
                where: {
                    id: id
                },
                data: {
                    id: feedData.id,
                    userId: feedData.userId,
                    executiveSummary: feedData.executiveSummary,
                    thumbnail: feedData.thumbnail,
                    pitchDeck: feedData.pitchDeck,
                    amountRaised: feedData.amountRaised,
                    endDate: new Date(feedData.endDate)
                },
            });
        } catch (error) {
            throw new Error('Error updating feed: ' + error.message);
        }
    }    
    
    async deleteFeedById(id) {
        try {
            return await prisma.fundingFeed.delete({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.log("Error deleting feed: ", error);
            throw error;
        }
    }
}

module.exports = new FeedRepository();
