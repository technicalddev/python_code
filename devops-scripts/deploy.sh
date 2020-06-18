#!/bin/bash

set -e  # Stop script on error

# Define all the parameters required for the build
BUILD_BRANCH=`git rev-parse --abbrev-ref HEAD`  # Build whatever branch we are on
echo "**** We are building branch ${BUILD_BRANCH}"
BUILD_SERVER_USERNAME=ubuntu
BUILD_SERVER_FOLDER=/home/ubuntu/moneytorin

# Get the directory where this script is being run from
SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Build the code. This is the most time and memory consuming part of the build.
cd $SCRIPTDIR/../

npm install                 # Install dependencies
ng build --prod --no-progress
echo "**** ng build finished"

cd $SCRIPTDIR/../dist/moneytor-in/browser

# Copy the build files to AWS S3 
aws s3 sync ./ s3://moneytor.in

# Invalidate the Cache from AWS CloudFront
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
